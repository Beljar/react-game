import React, { Component, Fragment } from 'react';

class MenuSettingsView extends Component {
  constructor(props) {
    super(props);
    this.setConfigParam = this.setConfigParam.bind(this);
    this.setMusicVolume = this.setMusicVolume.bind(this);
    this.setSoundsVolume = this.setSoundsVolume.bind(this);
    this.setWidth = this.setWidth.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.setConfig = this.setConfig.bind(this);
    this.state = {
      config: this.props.config
    }
  }
  setConfigParam(key, val) {
    this.setState((state) => {
      const config = state.config;
      config[key] = val;
      return { config: config }
    })
    console.log(this.state)
  }
  setMusicVolume(e) {
    console.log(e.target.value);
    console.log(e.nativeEvent.target.attributes.value.value);
    const key = e.target.name;
    const val = e.target.value / 100;
    console.log(key);
    this.props.game.setMusicVolume(val);
    this.setState((state) => {
      const config = state.config;
      config[key] = e.target.value / 100;
      return { config: config }
    })
    console.log(this.state)
  }
  setSoundsVolume(e) {
    console.log(e.target.value);
    console.log(e.nativeEvent.target.attributes.value.value);
    const key = e.target.name;
    const val = e.target.value / 100;
    console.log(key);
    this.props.game.setSoundsVolume(val);
    this.setState((state) => {
      const config = state.config;
      config[key] = val;
      return { config: config }
    })
    console.log(this.state)
  }
  setWidth(e) {
    this.setState((state) => {
      const config = state.config;
      config.size.c = Number(e.target.value);
      return { config: config }
    })
  }
  setHeight(e) {
    this.setState((state) => {
      const config = state.config;
      config.size.r = Number(e.target.value);
      return { config: config }
    })
  }
  setConfig(config) {
    this.props.setConfig(config);
    this.props.route('main')
    this.props.close();
  }
  render() {
    return <Fragment>
      <div className='h1'>Volume</div>
      <div className='block'>
        <span>Music</span>
        <input type="range" min="1" max="100" name='musicVolume' defaultValue={this.state.config.musicVolume * 100} onChange={this.setMusicVolume}></input>
      </div>
      <div className='block'>
        <span>Sounds</span>
        <input type="range" min="1" max="100" name='soundsVolume' defaultValue={this.state.config.soundsVolume * 100} onChange={this.setSoundsVolume}></input>
      </div>
      <div className='h1'>Settings</div>
      <div className='block'>
        <div className='row'>
        <div className='col-1-2'>
        <span>width</span><input className='input-field' defaultValue={this.state.config.size.c} type='number' step='1' onChange={this.setWidth}></input>
        </div>
        <div className='col-1-2'>
        <span>height</span><input className='input-field' defaultValue={this.state.config.size.r} type='number' step='1' onChange={this.setHeight}></input>
        </div>
        </div>
      </div>
      <div className='block'>
        <span>Number of spots</span>
        <input type="range" min="1" max="100" defaultValue={this.state.config.fillDensity * 100} onChange={(e) => this.setConfigParam('fillDensity', (e.target.value / 100))}></input>
      </div>
      <div className='block'>
        <span>Spot lifetime</span>
        <input type="range" min="3" max="30" defaultValue={this.state.config.lifeSpan} onChange={(e) => this.setConfigParam('lifeSpan', Number(e.target.value))}></input>
      </div>
      <div className='block'>
        <span>Number of prises</span>
        <input type="range" min="1" max="100" defaultValue={this.state.config.scoreProbability * 100} onChange={(e) => this.setConfigParam('scoreProbability', (e.target.value / 100))}></input>
      </div>
      <div className='block'>
        <div className='menu__btn' onClick={() => { this.setConfig(this.state.config) }}>Apply</div>
        <div className='menu__btn' onClick={() => { this.props.route('main') }}>Back</div>
      </div>
    </Fragment>
  }
}

export default MenuSettingsView;