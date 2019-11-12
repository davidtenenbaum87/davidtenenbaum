import React from 'react';

const PortfolioItem = ({ portfolioItemInfo }) => {
    const githubLinks = Object.entries(portfolioItemInfo.githubLinks).map((link, index) => {
        return <a key={index} href={link[1]} className="btn-github">{link[0]} &rarr;</a>;
    })

    return (
        <div className="portfolio-item">
            <h3 className="portfolio-item__title">{portfolioItemInfo.title}</h3>
            <div className="portfolio-item__technologies">
                {portfolioItemInfo.technologies}
            </div>
            <div className="portfolio-item__githubLinks">
                {githubLinks}
            </div>
            <p className="portfolio-item__description">{portfolioItemInfo.description}</p>
            <div className="portfolio-item__video">
                <iframe title={portfolioItemInfo.title} 
                        src={portfolioItemInfo.vimeoURL} 
                        frameBorder="none" 
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen={true}></iframe>
            </div>
        </div>
    )
};

export default PortfolioItem;