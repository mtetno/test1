import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Label, Image, Row ,Button } from 'react-bootstrap';
import Slider, { Rail, Handles, Tracks, Ticks} from 'react-compound-slider'
import './inputs.scss';
import { Handle, Track, Tick } from './SliderHandler'
import autobind from 'autobind-decorator';

const sliderStyle = {
  position: 'relative',
}

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 6,
  borderRadius: 4,
  cursor: 'pointer',
  background: 'linear-gradient(90deg,#4c8ad5,#89c053)',
}

class SliderComponentSecond extends Component {
  constructor(props) {
    super(props);
  }

  @autobind
  onChange(values) {
    this.props.handleChange(values[0], this.props.index);
    this.setState({ values })
  }

  @autobind
  onUpdate(values) {
    this.props.handleChange(values[0], this.props.index);
    this.setState({ values })
  }

  render() {
    const { tickFormat } = this;

    return (
      <div style={{ height: 60, width: '100%', marginTop: 45 }}>
        
        <Slider
          mode={2}
          step={0.1}
          domain={this.props.domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          defaultValues={this.props.value ? [this.props.value] : this.props.defaultValues}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={this.props.domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={10}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick
                    key={tick.id}
                    tick={tick}
                    count={ticks.length}
                    format={tickFormat}
                  />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    )
  }
}

export default SliderComponentSecond