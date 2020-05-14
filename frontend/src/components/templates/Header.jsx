import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex flex-column"> {/* d-none é uma classe que faz com que o Header não apareça em smartphones*/}
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title} {/*i é a propriedade HTML de Icone*/}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>