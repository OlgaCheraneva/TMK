import React from 'react';

import Catalog from '../components/layout/Catalog';

const Contacts = () => {
    return (
        <section className="container-lg content">
            <div className="row">
                <Catalog />
                <div class="col col-md-7 col-lg-9">
                    <section class="delivery">
                        <h3 class="block__header">Контакты</h3>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
