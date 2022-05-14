import { useState } from 'react';
import { useRafInterval } from 'ahooks';
import cls from 'classnames';
import banner1 from '../../assets/7k2022.png';
import banner2 from '../../assets/4k2022.png';
import banner3 from '../../assets/2019.jpg';
import banner4 from '../../assets/2020.jpg';
import banner5 from '../../assets/2021.png';
import { BannerWrapper } from './styles';

const bannerList = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
];

export const Banner = () => {
  const [index, setIndex] = useState<number>(0);

  useRafInterval(() => {
    setIndex((index + 1) % bannerList.length);
  }, 5000);

  return (
    <BannerWrapper>
      {
        bannerList.map((img, i) => (
          <img
            key={img}
            className={cls('shown-img', {
              'show': index === i,
            })}
            src={bannerList[i]}
            alt="banner"
          />
        ))
      }
      <img
        className="placeholder-img"
        src={bannerList[0]}
        alt="banner"
      />
    </BannerWrapper>
  );
};

