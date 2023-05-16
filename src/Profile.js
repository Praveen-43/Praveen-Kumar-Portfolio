import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';


    class Profile extends React.Component {
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
              src="https://assets10.lottiefiles.com/packages/lf20_z3pnisgt.json"
              style={{ height: '600px', width: '600px' }}
            ></Player>
          );
        }
      }
 
// export default Animation;
export default Profile;