import React from 'react';
import { Row, Col, Card } from 'antd';

class ImageCard extends React.Component {
    render(cardInfo) {
        return (
          <div className="imageCard">
            <Card title={this.state.imageName} style={{ width: '100%' }}>
              <div>tag1</div>
              <div>tag2</div>
              <div>tag3</div>
            </Card>
          </div>
        );
    }
}

export default ImageCard;
