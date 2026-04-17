import '../css/leftPannel.css';

function LeftPannel() {

    const coloredText = <span className="colorear"></span>

    return (
        <div className="left-pannel">
            <div className="left-pannel-text">
                <h1>Get <span style={{ color: 'hsl(277, 64%, 61%)'}}>insights</span> that help your business grow.</h1>
                <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            </div>
            <div className="left-pannel-stats">
                <div className="left-pannel-stats-stat">
                    <h2>10k+</h2>
                    <p>COMPANIES</p>
                </div>
                <div className="left-pannel-stats-stat">
                    <h2>314</h2>
                    <p>TEMPLATES</p>
                </div>
                <div className="left-pannel-stats-stat">
                    <h2>12M+</h2>
                    <p>QUERIES</p>
                </div>
            </div>
        </div>
    );
}

export default LeftPannel;