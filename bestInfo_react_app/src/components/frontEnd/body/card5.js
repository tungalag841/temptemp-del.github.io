import React from 'react'
import { Row, Col } from 'reactstrap'
import { GoCalendar } from 'react-icons/go'
import LinesEllipsis from 'react-lines-ellipsis'
import moment from 'moment-timezone'
import 'moment-timezone/builds/moment-timezone-with-data-2012-2022'

import './cards.css'

const Box5 = ({title, img, date}) =>{
  return (
    <div>
      <Row
        style={{ marginLeft: '0', marginRight: '0', padding: '0' }}
        className='news'
      >
        <Col
          md='12'
          id='col'
          style={{
            marginLeft: '0',
            marginRight: '0',
            padding: '0',
            width: '90%',
          }}
        >
          <img
            src={img}
            alt={title}
            style={{
              marginLeft: '0',
              marginRight: '0',
              padding: '0',
              height: '180px',
              width: '95%',
            }}
          />
          <br />
          <LinesEllipsis
            text={title}
            maxLine='2'
            ellipsis=''
            trimRight
            basedOn='letters'
          />
          <div
            className='timelink'
            style={{ fontSize: '11px', marginTop: '5%' }}
          >
            <div style={{ fontSize: '14px', color: 'gray' }}>
              <GoCalendar size='13px' />{' '}
              {moment(
                moment(date)
                  .tz('Asia/Ulaanbaatar')
                  .format('YYYY-MM-DD[T]HH:mm:ss')
                  .toString()
              ).toNow(true)}{' '}
              өмнө
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Box5
