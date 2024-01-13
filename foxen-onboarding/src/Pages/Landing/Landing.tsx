import Card from 'react-bootstrap/Card';
import './Landing.css';
import LandingPageData from '../../data/PageData/Landing/LandingPageData';

export default function LandingPage() {
    return (
        <div>
            <Card className="landing-page-card">
                <Card.Title>Our Purpose and Mission</Card.Title>
                <Card.Body>
            <ul>
                    <li>{LandingPageData.purposeStatement}</li> 
                    <li>{LandingPageData.missionStatement}</li>
            </ul>
                </Card.Body>
            </Card>
            <Card className="landing-page-card">
                <Card.Title>Team Norms</Card.Title>
                <Card.Body>
                    <ul>
                        {LandingPageData.teamNorms.map((norm) => {
                            return <li>{norm}</li>
                        })}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    
    );
}