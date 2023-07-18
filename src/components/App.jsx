import { Component } from 'react';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

const LS_KEY = 'reader_it';

export class App extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if(savedState) {
      this.setState({ index: +savedState });
    }
    
  }

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  changeIndex = value => {
    this.setState(prevState => ({
      index: prevState.index + value,
    }));
  };

  render() {
    const { index } = this.state;
    const totalItems = this.props.items.length;
    const currentItem = this.props.items[index];

    return (
      <div>
        <Controls
          currentItem={index + 1}
          totalItems={totalItems}
          onChangeIndex={this.changeIndex}
        />
        <Progress currentPage={index + 1} totalPages={totalItems} />
        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}
