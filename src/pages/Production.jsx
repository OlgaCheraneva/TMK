import React from 'react';

import CatalogAside from '../components/layout/CatalogAside';
import './Production.css';

const Production = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <CatalogAside />
                <div className="col col-md-7 col-lg-9">
                    <section className="delivery">
                        <h3 className="block__header">Производство</h3>
                        <article>
                            <h4>
                                ТРУБЫ ИЗОЛИРУЮТСЯ БЫСТРО И КАЧЕСТВЕННО НА НОВОМ
                                ОБОРУДОВАНИИ
                            </h4>
                            <p>
                                Полностью замкнутый производственный цикл. Все
                                процессы производства доведены до совершенства.
                            </p>
                            <p>
                                Мы можем поставить вам любое количество трубы в
                                ППУ изоляции и фасонных изделий.
                            </p>
                            <div className="row">
                                <div className="col-lg-6 p-2 d-flex">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                1. Производство стальной трубы
                                                (ТМК)
                                            </h5>
                                        </div>
                                        <img
                                            src="img/tmk-prod-md.jpg"
                                            className="card-img-bottom production-card__image"
                                            alt="Производство стальной трубы (ТМК)"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 p-2 d-flex">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                2. Производство трубы в ППУ
                                                изоляции
                                            </h5>
                                        </div>
                                        <img
                                            src="img/ppu-prod.00_jpg_srz"
                                            className="card-img-bottom production-card__image"
                                            alt="Производство трубы в ППУ
                                            изоляции"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 p-2 d-flex">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                3. Производство трубы в
                                                оцинкованной оболочке
                                            </h5>
                                        </div>
                                        <img
                                            src="img/zinc.jpe"
                                            className="card-img-bottom production-card__image of_contain"
                                            alt="Производство трубы в оцинкованной оболочке"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 p-2 d-flex">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                4. Производство фасонных изделий
                                            </h5>
                                        </div>
                                        <img
                                            src="img/catalog/Отводы В Изоляции/ppu-zinc-shaped.png"
                                            className="card-img-bottom production-card__image"
                                            alt="Производство фасонных изделий"
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Production;
