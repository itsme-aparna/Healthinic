const styles = theme => ({

    sendBtn: {
      color: '#42bd45',
      cursor: 'pointer',
      '&:hover': {
        color: '#42bd45'
      }
    },
  
    chatTextBoxContainer: {
      position: 'absolute',
      bottom: '-80px',
      left: '315px',
      boxSizing: 'border-box',
      overflow: 'auto',
      width: 'calc(100% - 300px - 50px)'
    },
  
    chatTextBox: {
      width: 'calc(100% - 25px)'
    }
  
  });
  
  export default styles;