import React from 'react';
import './Timeline.css';

const Timeline = () => {
    return (
        <section id="timeline">
            <div className="tl-item">
                <div className="tl-bg"
                    style={{ backgroundImage: 'url("https://infographics.channelnewsasia.com/interactive/singaporecircuitbreaker/images/inset-images/inset-3.jpg")' }}>
                </div>
                <div className="tl-period">
                    <p>Jan to Mar</p>
                </div>
                <div className="tl-content">
                    <h1>Prelude</h1>
                    <p>Entertainment venues, tuition and enrichment centres and places of worship were to be
                    shut
                    down.
                </p>
                    <p>Shopping malls, retail establishments and tourist attractions had to reduce crowd density
                    in
                    order to stay open.</p>
                    <p>Gatherings of more than 10 people outside of work and school were prohibited.</p>
                </div>
            </div>
            <div className="tl-item">
                <div className="tl-bg"
                    style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Safe-distancing_measure_-_no_social_gathering_dining_together_%2849753010792%29.jpg/2560px-Safe-distancing_measure_-_no_social_gathering_dining_together_%2849753010792%29.jpg")' }}>
                </div>
                <div className="tl-period">
                    <p>Apr to May</p>
                </div>
                <div className="tl-content">
                    <h1>Circuit Breaker</h1>
                    <p>All non-essential workplaces and services involving close contact were shut down.</p>
                    <p>Wearing of masks became mandatory, applicable to everyone when not at home.</p>
                    <p>All food establishments were only allowed to offer take-away, drive-thru and delivery of
                    food.
                </p>
                </div>
            </div>
            <div className="tl-item">
                <div className="tl-bg"
                    style={{ backgroundImage: 'url("https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20200914_geylang_market_nuria.jpg?itok=hABTaHJV")' }}>
                </div>
                <div className="tl-period">
                    <p>Early Jun</p>
                </div>
                <div className="tl-content">
                    <h1>Phase 1: Safe Reopening</h1>
                    <p>Essential services and businesses that operate in settings with lower risks of
                    transmission
                    were
                    allowed to open.</p>
                    <p>Households can receive 2 visitors per day within a home, who can only be direct family
                    members.
                </p>
                    <p>Primary and secondary school graduating students can attend school daily, while the rest
                    remain
                    on home-based learning.</p>
                </div>
            </div>
            <div className="tl-item">
                <div className="tl-bg"
                    style={{ backgroundImage: 'url("https://www.straitstimes.com/sites/default/files/articles/2020/08/08/yaohui-yhwedsupertree-9410.jpg")' }}>
                </div>
                <div className="tl-period">
                    <p>Mid Jun</p>
                </div>
                <div className="tl-content">
                    <h1>Phase 2: Safe Transition</h1>
                    <p>Retail, F&B, personal health and wellness, home-based services, sports and public
                    facilities
                    were
                    allowed to open.</p>
                    <p>Small-group gatherings and daily home visiting of up to 5 persons are allowed.</p>
                    <p>Schools will fully re-open from end June, while IHLs are allowed to conduct face-to-face
                    learning
                    for students.</p>
                </div>
            </div>
        </section>
    )
}

export default Timeline;