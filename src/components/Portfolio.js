import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = (props) => {
    return(
        <section className="portfolio">
            <PortfolioItem portfolioItemInfo={props.portfolioItems[0]} />
            <PortfolioItem portfolioItemInfo={props.portfolioItems[1]} />
            <PortfolioItem portfolioItemInfo={props.portfolioItems[2]} />
        </section>
    )
}

export default Portfolio;