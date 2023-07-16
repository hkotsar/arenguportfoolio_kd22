import React from 'react';
import '../footer/footer.scss';

const Footer = () => {
  return (
    <>
        <footer class="footer" id="footer">
            <div class="footer__info">
                <div class="footer__email">
                    <svg class="footer__email--icon">
                        <use xlinkHref={`${process.env.REACT_APP_URL}/icons.svg#icon-envelope`}></use>
                    </svg>
                </div>
                <span>heiki.kotsar@voco.ee</span>
            </div>
        </footer>
    </>
  )
}

export default Footer
