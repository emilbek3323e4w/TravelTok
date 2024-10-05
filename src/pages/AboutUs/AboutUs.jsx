import React from 'react';
import './AboutUs.scss';
import image from '../../assets/mount.png'; // Adjust the path as necessary

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="frame-54">
        <p>Главная/О нас</p> {/* Updated text */}
      </div>
      <div className="frame-153">
        <h1>О нас</h1>
      </div>
      <div className="frame-213">
        <div className="text">
          <p>
            Добро пожаловать на наш сервис авторских туристических маршрутов по Кыргызстану! 
            Мы предлагаем уникальные путешествия, разработанные местными гидами и энтузиастами. 
            Каждое наше предложение – это больше, чем просто тур: это возможность погрузиться в 
            культуру, природу и традиции нашей удивительной страны.
          </p>
          <p>
            Наша команда опытных гидов проведет вас по самым живописным местам, откроет перед вами 
            красоту и богатство культуры Кыргызстана. 
            Вы сможете узнать о древних традициях, насладиться неповторимыми пейзажами и ощутить 
            дух гостеприимства.
          </p>
          <p>
            Присоединяйтесь к нам и создайте незабываемые воспоминания в одном из самых живописных уголков мира!
          </p>
        </div>
        <div className="image">
          <img src={image} alt="Mountain" />
        </div>
      </div>
      <div className="frame-214">
        <h2>Лицензии</h2>
        <p>
          Мы работаем в соответствии с лицензиями, выданными соответствующими органами, что гарантирует 
          высокое качество и безопасность наших услуг. Все наши гиды имеют необходимые сертификаты и 
          прошли обучение, чтобы обеспечить вам наилучший опыт.
        </p>
      </div>
      <div className="frame-219">
        <div className="box">
          <h3>Необычные экскурсии</h3>
          <p>Мы любим необычные экскурсии: вы не только узнаете историю города, но и погуляете по его секретным барам, крышам и галереям современного искусства. А еще приготовите обед с местным шеф-поваром.</p>
        </div>
        <div className="box">
          <h3>Увлеченные гиды</h3>
          <p>Наши гиды – настоящие энтузиасты своего дела. Они всегда готовы поделиться интересными фактами и местными легендами, чтобы ваше путешествие стало незабываемым.</p>
        </div>
        <div className="box">
          <h3>Личное общение</h3>
          <p>Мы ценим личное общение и индивидуальный подход. Каждый маршрут можно адаптировать под ваши интересы и пожелания, чтобы сделать ваше путешествие уникальным.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
