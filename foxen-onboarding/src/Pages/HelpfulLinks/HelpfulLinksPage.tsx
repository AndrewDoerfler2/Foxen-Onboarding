import HelpfulLinksPageData from "../../data/PageData/HelpfulLinks/HelpfulLinks";
import Card from 'react-bootstrap/Card';
import './HelpfulLinksPage.css';

export default function HelpfulLinksPage() {
    return (
        <div>
            <Card className="helpful-links-card">
                <Card.Title className="card-title">Foxen Links</Card.Title>
                <Card.Body>
                    <ul>
                        {HelpfulLinksPageData.foxenLinks.map((link) => {
                            return <li><a href={link.Url}>{link.Title}</a></li>
                        })}
                    </ul>
                </Card.Body>
            </Card>
            <Card className="helpful-links-card">
                <Card.Title className="card-title">Implementation Delivery Links</Card.Title>
                <Card.Body>
                    <ul>
                        {HelpfulLinksPageData.implementationDeliveryLinks.map((link) => {
                            return <li><a href={link.Url}>{link.Title}</a></li>
                        })}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
}
