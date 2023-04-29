import React from 'react'
import { Row, Col } from 'reactstrap'

import './cards.css'

const Box2 = ({category, title, img, date}) => {
  return (
    <div>
      <Row
        style={{
          margin: '0',
          borderBottom: '1px solid lightgray',
          marginLeft: '0',
          marginRight: '0',
          padding: '0',
        }}
        className='news'
      >
        <Col md='6' xs='6' id='col' style={{ padding: 0, margin: 0 }}>
          <div style={{ padding: 0, margin: 0 }}>
            <img
              className='side__news-img'
              src={img}
              alt={title}
            />
          </div>
        </Col>

        <Col
          md='6'
          xs='6'
          id='col'
          style={{ margin: 0, padding: 0, paddingLeft: '2%' }}
        >
          <div className='body__news-moreNews__box'>
            <div
              className='mobile2'
              style={{
                fontSize: '6px',
                margin: 0,
                padding: 0,
                paddingTop: '0',
                paddingLeft: '20%',
              }}
            ></div>

            <span className='body__news-moreNews__title'>
            {title.length > 70 ? title.substring(0, 70 - 3) + '...' : title}
            </span>

            <div
              className='timelink'
              style={{ fontSize: '10px', marginLeft: '0%', marginTop: '1%' }}
            ></div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Box2
