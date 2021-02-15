const styles = theme => ({

    content: {
      height: 'calc(100vh - 100px)',
      overflow: 'auto',

      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      overflowY: 'scroll',
      top: '50px',
      width: 'calc(100% - 300px)',
      position: 'absolute',
      top:'17%'
    },
  
    userSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: 'gray',
      color: 'white',
      width: '300px',
      borderRadius: '10px'
    },
  
    friendSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#42bd45',
      color: 'white',
      width: '300px',
      borderRadius: '10px'
    },
  
    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '50px',
      backgroundColor: '#42bd45',
      position: 'absolute',
      top:'10',
      marginLeft: '301px',
      fontSize: '18px',
      textAlign: 'center',
      color: 'white',
      paddingTop: '10px',
      boxSizing: 'border-box'
    }
  
  });
  
  export default styles;