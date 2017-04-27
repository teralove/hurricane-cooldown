//vers 1.1
const MESSAGE_SENDER_NAME = 'Hurricane',
ABNORMALITY_HURRICANE = 60010,
HURRICANE_COOLDOWN = 119

let SEND_MESSAGES = true

module.exports = function HurricaneCooldown(dispatch) {
	let cid = null,
		hurricaneTime = HURRICANE_COOLDOWN,
		hurricaneTimer = null

	dispatch.hook('S_LOGIN', 1, event => {
		({cid} = event)
	})

	dispatch.hook('S_ABNORMALITY_BEGIN', 1, event => { 
		if(event.source.equals(cid) && event.id == ABNORMALITY_HURRICANE)
		{
			sendChatMessage('Hurricane has been applied')
			
			hurricaneTimer = setInterval(() => {
			switch (hurricaneTime) {
//				case 105:
//				  sendChatMessage('Hurricane ready in 105s')
//				  break
				case 90:
				  sendChatMessage('Hurricane ready in 90s')
				  break
				case 75:
				  sendChatMessage('Hurricane ready in 75s')
				  break
				case 60:
				  sendChatMessage('Hurricane ready in 60s')
				  break
				case 45:
				  sendChatMessage('Hurricane ready in 45s')
				  break
				case 30:
				  sendChatMessage('Hurricane ready in 30s')
				  break
				case 15:
				  sendChatMessage('Hurricane ready in 15s')
				  break
//				case 10:
//				  sendChatMessage('Hurricane ready in 10s')
//				  break
//				case 5:
//				  sendChatMessage('Hurricane ready in 5s')
//				  break
				case 0:
				  sendChatMessage('Hurricane is ready!')
				  clearInterval(hurricaneTimer)
				  hurricaneTime = HURRICANE_COOLDOWN
				  break
			  }
			  hurricaneTime -= 1
			}, 1000)
		}
	})
	
	dispatch.hook('cChat', (event) => {	  
		if (/^<FONT>.hcd<\/FONT>$/i.test(event.message)) {
			SEND_MESSAGES = !SEND_MESSAGES
			var sendMessageStatus = SEND_MESSAGES ? 'enabled' : 'disabled'
		  		  
			dispatch.toClient('sChat', {
			  channel: 2,
			  authorID: { high: 0, low: 0 },
			  unk1: 0,
			  gm: 1,
			  unk2: 0,
			  authorName: MESSAGE_SENDER_NAME,
			  message: '<FONT>Messages have been ' + sendMessageStatus + '</FONT>'
			})
		  return false
		}

	 })

	function sendChatMessage(msg) {
		if (!SEND_MESSAGES) return
		
		dispatch.toClient('sChat', {
			channel: 21,
			authorID: { high: 0, low: 0 },
			unk1: 0,
			gm: 1,
			unk2: 0,
			authorName: MESSAGE_SENDER_NAME,
			message: '<FONT>' + msg + '</FONT>'
		})
	}
	
}