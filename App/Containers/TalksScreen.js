import React from 'react'
import {
  View,
  ListView,
  Text,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Talk from '../Components/Talk'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import Colors from '../Themes/Colors'
import styles from './Styles/TalksScreenStyle'

class TalkScreen extends React.Component {

  constructor (props) {
    super(props)

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = require('../Fixtures/talks.json')
    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *   The same goes for sectionHeaderHasChanged
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects)
    }
  }

  static navigationOptions = {
    tabBar: {
      label: 'Schedule',
      icon: ({ tintColor }) => (
        <Icon
          name='clock'
          type='simple-line-icon'
          color={tintColor}
        />
      )
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    const avatarURL = `https://infinite.red/images/chainreact/${rowData.image}.png`
    return (
      <Talk
        key={sectionID}
        title={rowData.talkTitle}
        name={rowData.name}
        avatarURL={avatarURL}
        start={'10:00AM'}
        duration={'60 Minutes'}
      />
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <LinearGradient colors={[Colors.purple, Colors.darkPurple]} styles={styles.linearGradient}>
        <View style={styles.dayToggle}>
          <TouchableOpacity>
            <Text style={styles.activeDay}>
              Monday July, 17th
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.inactiveDay}>
              Tuesday July, 18th
            </Text>
          </TouchableOpacity>
        </View>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </LinearGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkScreen)
