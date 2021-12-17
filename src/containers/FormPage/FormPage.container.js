import React from 'react';
import MyListbox from '../../components/Listbox/Listbox.component';
import RadioButton from '../../components/RadioButton/RadioButton.component';
import InputField from '../../components/Input/Input.component';
import RangeSlider from '../../components/Slider/Slider.component';
import Button from '../../components/Button/Button.component';
import './FormPage.styles.css';

const Form = ({}) => {
  const advertiser = [
    { id: 1, ad: 'Select advertiser', disabled: true },
    { id: 2, ad: 'Coco Cola-15' },
    { id: 3, ad: 'Pepsi-30' },
  ];
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
          <MyListbox results={advertiser} />
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
          <div className={`pt-8 pl-6 `}>
            <InputField />
          </div>
          <hr className={`mt-6 ml-6 mr-28 border border-b-0 border-gray-500`} />
          <div className={`pt-8 pl-6 `}>
            <RadioButton />
          </div>
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
            <RangeSlider />
          </div>
        </div>
      </div>
      <div className={`mt-8 pl-4 w-96 flex justify-between`}>
        <Button
          backgroundColor={'#3AC1C8'}
          label={'Back'}
          color={'#272727'}
          height={40}
          width={150}
          fontSize={18}
        />
        <Button
          backgroundColor={'#3AC1C8'}
          label={'Next'}
          color={'#272727'}
          height={40}
          width={150}
          fontSize={18}
        />
      </div>
    </div>
  );
};

export default Form;
