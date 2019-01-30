import React from 'react'
import injectSheet from 'react-jss'
import { Button} from '@material-ui/core'
import FabInk from './FabInk'
import TextButtonCss from './TextButtonCss'
import TextButtonInk from './TextButtonInk'
import Fab from '@material-ui/core/Fab';
import RaisedButton from './RaisedButton'


const Td = ({ children }) => {
  return <td style={{ padding: 10, fontSize: '0.9em' }}>{children}</td>
}

const App = ({ classes }) => {

  return (
    <div className={classes.wrapper}>
      <button>Plain Button</button>
      {/* Text Button */}
      <h1>Replicating Material Design/UI Buttons.</h1>
      <p>The below are buttons which imitate the look of Material Design buttons, including their characteristic ripple effect.</p>
      <div className={classes.textButtons}>
        <h2 className={classes.h2}>Text Button</h2>
        <p>The MUI-LIKE CSS button is very much like both of the others but notice that the center of its ripple effect is always in the middle of the button regardless of where it is clicked. With the actual MUI button and the imitation using <code>react-ink</code>, the center of the ripple is where the user clicks.</p>
        <table>
          <tbody>
            <tr>
              <Td>
                MUI Text Button
              </Td>
              <Td>
                <Button color="primary" className={classes.muiButton}>
                  MUI Primary
                </Button>
              </Td>
            </tr>
            <tr>
              <Td>
                MUI Imatation using CSS
              </Td>
              <td>
                <TextButtonCss>MUI-like CSS</TextButtonCss>
              </td>
            </tr>
            <tr>
              <Td>
                MUI Imatation using <code>react-ink</code>
              </Td>
              <Td>
                <TextButtonInk>MUI-like Ink</TextButtonInk>
              </Td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* FAB Button */}
      <div className={classes.fabButtons}>
        <h2 className={classes.h2}>Floating Action Button (FAB)</h2>
        <p>The immitation button is intentionally darker as this is the color needed for the application I'm currently working on.</p>
        <table>
          <tbody>
            <tr>
              <Td>
                MUI FAB Button
              </Td>
              <Td>
              <Fab size="small" color="secondary">
                H
              </Fab>
              </Td>
            </tr>
            <tr>

              <Td>
                MUI Immatation using <code>react-ink</code>
              </Td>
              <Td>
                <FabInk/>
              </Td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Raised Button */}
      <div className={classes.fabButtons}>
        <h2 className={classes.h2}>Raised Button</h2>
        <table>
          <tbody>
            <tr>
              <Td>
                Raised Button
              </Td>
              <Td>
              <RaisedButton>
                Raised
              </RaisedButton>
              </Td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}


const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    color: 'white',
    backgroundColor: '#282c34',
    width: '100%',
  },
  muiButton: {
    color: 'rgb(33, 150, 243)'
  },
  row: {
    display: 'flex',
    fontSize: '.5em',
    backgroundColor: 'green',
    width: '100%',
  },
  textButtons: {
    width: '50%',
  },
  fabButtons: {
    width: '50%',
  },
  h2: {
    fontSize: '2rem',
  }
}

export default injectSheet(styles)(App)