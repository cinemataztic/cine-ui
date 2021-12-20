import React, { useState } from 'react';
import ListBox from '../../components/Listbox/Listbox.component';
import RadioButton from '../../components/RadioButton/RadioButton.component';
import InputField from '../../components/Input/Input-datepicker/Input.component';
import RangeSlider from '../../components/Slider/Slider.component';
import Button from '../../components/Button/Button.component';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import './FormPage.styles.css';

const advertiser = [
  { id: 1, ad: 'Select advertiser', disabled: true },
  { id: 2, ad: 'Coco Cola-15' },
  { id: 3, ad: 'Pepsi-30' },
];

const data = ['All days', 'Weekends', 'Week days', 'Custom'];

const datas = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Form = ({}) => {
  const [selectedAd, setSelectedAd] = useState(advertiser[0]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [range, setRange] = useState({
    defaultValue: 1000,
    minValue: 1,
    maxValue: 5000,
  });
  const [day, setDay] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const onChangeHandle = (value, checked) => {
    setDay((e) => {
      const selectedDay = e;
      selectedDay[value] = checked;
      return { ...selectedDay };
    });
  };

  const onChangeSliderHandle = (value) => {
    setRange((e) => {
      const selectedRange = e;
      selectedRange['defaultValue'] = value;
      return { ...selectedRange };
    });
  };

  const onFromDateChangeHandle = (value) => {
    setFromDate(value);
  };

  const onToDateChangeHandle = (value) => {
    setToDate(value);
  };

  return (
    <div className={`w-full h-auto bg-tertiary text-white pb-16`}>
      <div className={`pl-4 pt-4`}>
        <h1 className={`text-4xl pt-4`}>Create campaign</h1>
      </div>
      <div className={`mt-4 ml-4`}>
        <h1 className={`text-3xl pt-4`}>who is the campaign for?</h1>
        <p className={`pt-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          eros molestie nisl lacinia hendrerit vel ut libero. Nulla ex odio,
          interdum eu urna sed, molestie faucibus urna. Nam sagittis dignissim
          ultrices. Cras est lectus, accumsan in sagittis at, posuere ac dui.
          Curabitur non volutpat eros, nec ornare nulla.
        </p>
        <div className={`pt-8`}>
          <ListBox
            data={advertiser}
            value={selectedAd}
            updatedstate={setSelectedAd}
            bgColor={'bg-secondary'}
            borderColor={'border-primary'}
            textColor={'text-white'}
          />
        </div>
      </div>
      <div className={`mt-4 ml-4`}>
        <h1 className={`text-3xl pt-4`}>
          when should the spot be active and shown to the audience?
        </h1>
        <p className={`pt-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          eros molestie nisl lacinia hendrerit vel ut libero. Nulla ex odio,
          interdum eu urna sed, molestie faucibus urna. Nam sagittis dignissim
          ultrices. Cras est lectus, accumsan in sagittis at, posuere ac dui.
          Curabitur non volutpat eros, nec ornare nulla.
        </p>
        <div className={`mt-8  w-3/5 h-auto bg-bggray rounded-lg pb-10`}>
          <h2 className={`pt-4 pl-6 text-2xl`}>Day & Time</h2>
          <p className={`pt-4 pl-6 w-11/12 `}>
            Select the period where the spot should be active and specify when
            you want the spot to be shown in the cinemas.
          </p>
          <div className={`pt-8 pl-6 flex w-5/6 justify-between`}>
            <div>
              <InputField
                value={fromDate}
                onChange={onFromDateChangeHandle}
                placeholder={'From'}
              />
            </div>
            <div>
              <InputField
                value={toDate}
                onChange={onToDateChangeHandle}
                placeholder={'To'}
              />
            </div>
          </div>
          <hr className={`mt-6 ml-6 mr-28 border border-b-0 border-gray-500`} />
          <div className={`pt-8 pl-6 `}>
            <RadioButton
              data={data}
              value={selectedOption}
              updatedState={setSelectedOption}
              checkedbgColor={'primary'}
              borderColor={'border-gray-600'}
            />
          </div>
          {selectedOption === 'Custom' && (
            <div
              className={`grid grid-cols-5 gap-y-6 w-10/12 h-28 px-4 border-0 rounded-lg py-6 bg-secondary bg-opacity-70 text-white mt-8 ml-6`}
            >
              <Checkbox
                data={datas}
                updatedState={day}
                onChange={onChangeHandle}
                checkbgColor={'bg-primary'}
              />
            </div>
          )}
        </div>
      </div>
      <div className={`mt-4 ml-4`}>
        <h1 className={`text-3xl pt-4`}>
          How much do you want to spend on the spot?
        </h1>
        <p className={`pt-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          eros molestie nisl lacinia hendrerit vel ut libero. Nulla ex odio,
          interdum eu urna sed, molestie faucibus urna. Nam sagittis dignissim
          ultrices. Cras est lectus, accumsan in sagittis at, posuere ac dui.
          Curabitur non volutpat eros, nec ornare nulla.
        </p>
        <div className={`mt-8 w-3/5 h-auto bg-bggray rounded-lg pb-5`}>
          <h2 className={`pt-4 pl-6 text-2xl`}>Budget</h2>
          <p className={`pt-4 pl-6 `}>
            Use the slider to set your budget or enter the amount of the budget
            you can use for the spot.
          </p>
          <div className={`pt-6 pl-6 `}>
            <RangeSlider
              value={range}
              onChange={onChangeSliderHandle}
              bgColor={'bg-primary'}
              textColor={'text-primary'}
            />
          </div>
        </div>
      </div>
      <div className={`mt-8 pl-4 w-96 flex justify-between`}>
        <Button
          backgroundColor={'bg-primary'}
          label={'Back'}
          color={'text-textgray'}
          size={'md'}
        />
        <Button
          backgroundColor={'bg-primary'}
          label={'Next'}
          color={'text-textgray'}
          size={'md'}
        />
      </div>
    </div>
  );
};

export default Form;
