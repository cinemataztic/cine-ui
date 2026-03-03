import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import PropTypes from 'prop-types';
import { GAP, PEEK } from './carousel.config';

function useSlidesPerView() {
  const [spv, setSpv] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setSpv(1);
      else if (w < 768) setSpv(2);
      else if (w < 1100) setSpv(3);
      else setSpv(4);
    };
    update();

    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(update, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return spv;
}

function ChevronLeft({ size }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path d='M15 18l-6-6 6-6' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

function ChevronRight({ size }) {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path d='M9 18l6-6-6-6' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

function PillDots({ current, count }) {
  return (
    <div className='flex gap-1 items-center'>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          data-testid='pill-dot'
          className={`inline-block h-1 w-[22px] rounded-full transition-opacity duration-300 ${i === current ? 'opacity-100' : 'opacity-30'}`}
          style={{ backgroundColor: 'var(--carousel-accent, #3dd6c8)' }}
        />
      ))}
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className='animate-spin'
      width={16}
      height={16}
      viewBox='0 0 24 24'
      fill='none'
      style={{ color: 'var(--carousel-accent, #3dd6c8)' }}
    >
      <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='3' strokeOpacity='0.25' />
      <path d='M12 2a10 10 0 0 1 10 10' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
    </svg>
  );
}

function PeekArrow({ onClick, direction }) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={direction === 'right' ? 'Next' : 'Previous'}
      className={`
        absolute top-[38%] -translate-y-1/2 z-20
        w-14 h-14 rounded-full
        flex items-center justify-center
        border-0 outline-none p-0 cursor-pointer
        bg-black/60 opacity-70 hover:opacity-100
        transition-[opacity,transform] duration-200 hover:scale-105
        ${direction === 'right' ? 'right-0' : 'left-0'}
      `}
      style={{ color: 'var(--carousel-accent, #3AC1C8)' }}
    >
      {direction === 'right' ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
    </button>
  );
}

const EmblaCarousel = ({ label, items, renderItem, onLoadMore, total, loading }) => {
  const isInfinite = onLoadMore != null;
  const hasMore = total != null && items.length < total;
  const slidesPerView = useSlidesPerView();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Calculate pagination
  const maxIndex = Math.max(0, items.length - slidesPerView);
  const numPages = isInfinite && total != null
    ? Math.ceil(total / slidesPerView)
    : Math.ceil(items.length / slidesPerView);
  const currentPage = Math.round(selectedIndex / slidesPerView);

  // Handle selection and infinite scroll
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());

      // Trigger onLoadMore when visible range would include unloaded items
      if (isInfinite && hasMore && !loading) {
        const visibleRange = index + slidesPerView;
        const needsMoreData = visibleRange >= items.length;

        if (needsMoreData) {
          onLoadMore(items.length); 
        }
      }
    };

    onSelect();
    emblaApi.on('select', onSelect);

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, items.length, total, loading, onLoadMore, isInfinite, hasMore, slidesPerView, maxIndex]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    const targetIndex = Math.max(0, currentIndex - slidesPerView);
    emblaApi.scrollTo(targetIndex);
  }, [emblaApi, slidesPerView]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    const targetIndex = Math.min(maxIndex, currentIndex + slidesPerView);
    emblaApi.scrollTo(targetIndex);
  }, [emblaApi, slidesPerView, maxIndex]);

  // Calculate card width based on current slidesPerView
  const cardWidth = `calc((100% - ${GAP * slidesPerView}px) / ${slidesPerView + PEEK})`;

  return (
    <div className='mb-6 overflow-hidden'>
      <div className='flex items-center justify-between mb-3'>
        <p className='text-lg font-semibold' style={{ color: 'var(--carousel-label-color, #525252)' }}>
          {label}
        </p>
        <div className='flex items-center gap-2'>
          {loading && <LoadingSpinner />}
          <PillDots current={currentPage} count={numPages} />
        </div>
      </div>

      <div className='relative'>
        {!prevBtnDisabled && <PeekArrow direction='left' onClick={scrollPrev} />}

        <div ref={emblaRef} className='overflow-hidden w-full rounded'>
          <div className='flex' style={{ gap: GAP }}>
            {items.map((item) => (
              <div
                key={item.id}
                className='flex-none'
                style={{
                  flex: `0 0 ${cardWidth}`,
                  minWidth: 0
                }}
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>

        {!nextBtnDisabled && <PeekArrow direction='right' onClick={scrollNext} />}
      </div>
    </div>
  );
};

EmblaCarousel.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ).isRequired,
  renderItem: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func,
  total: PropTypes.number,
  loading: PropTypes.bool,
};

export default EmblaCarousel;
