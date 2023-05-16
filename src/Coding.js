import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';


    class Coding extends React.Component {
        constructor(props) {
          super(props);
          this.player = React.createRef(); // initialize your ref
        }
        render() {
          return (
            <Player
              ref={this.player} // set the ref to your class instance
              autoplay={true}
              loop={true}
              controls={true}
              src="https://assets9.lottiefiles.com/packages/lf20_tno6cg2w.json"
              style={{ height: '700px', width: '600px' }}
            ></Player>
          );
        }
      }

export default Coding;