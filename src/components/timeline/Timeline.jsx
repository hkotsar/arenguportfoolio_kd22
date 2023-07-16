import React from 'react';
import '../timeline/timeline.scss';

const Timeline = () => {
  return (
    <div class="timeline">
        <div class="timeline__container timeline__left">
            <div class="timeline__content content--left">
                <span class="timeline__year">2015 - 2018</span>
                <span class="timeline__content--line"></span>
                <span class="timeline__text">Tartu Kristjan Jaak Peterson Gümnaasium</span>
            </div>
        </div>
        <div class="timeline__container timeline__right">
            <div class="timeline__content content--right">
                <span class="timeline__year">2018 - 2020</span>
                <span class="timeline__content--line"></span>
                <span class="timeline__text">Tartu Kutsehariduskeskus - Noorem tarkvaraarendaja</span>
            </div>
        </div>
        <div class="timeline__container timeline__last">
            <div class="timeline__content content--left">
                <span class="timeline__year">2022</span>
                <span class="timeline__content--line"></span>
                <span class="timeline__text">Tartu Rakenduslik Kolledž - UX/UI disaini nooremspetsialist</span>
            </div>
        </div>
    </div>
  )
}

export default Timeline
