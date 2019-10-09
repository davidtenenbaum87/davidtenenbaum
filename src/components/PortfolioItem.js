import React from 'react';

const PortfolioItem = ({ portfolioItemInfo }) => {
    const githubLinks = Object.entries(portfolioItemInfo.githubLinks).map((link, index) => {
        return <a key={index} href={link[1]}>{link[0]}</a>;
    })


    return(
        <div className="portfolio-item">
            <h3 className="portfolio-item--title">{portfolioItemInfo.title}</h3>
            <p className="portfolio-item--description">{portfolioItemInfo.description}</p>
            <div className="githubLinks">
                {githubLinks}
            </div>
            <div className="portfolio-item--video">
                <iframe title={portfolioItemInfo.title} src={portfolioItemInfo.vimeoURL} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
        </div>
    )
};

export default PortfolioItem;