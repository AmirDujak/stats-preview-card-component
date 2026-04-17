import LeftPannel from "./LeftPannel";
import RightPannel from "./RightPannel";
import '../css/statsCard.css';

function StatsCard() {

    return (
        <div className="stats-card-component">
            <LeftPannel />
            <RightPannel />
        </div>
    );
}

export default StatsCard;