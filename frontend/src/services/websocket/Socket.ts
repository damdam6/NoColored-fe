import { Dispatch, SetStateAction } from 'react';

import { WEBSOCKET_URL } from '@/services/constants';

export class Socket {
  protected webSocket: WebSocket;

  constructor() {
    this.webSocket = { readyState: 3 } as WebSocket;
  }

  connect() {
    this.webSocket = new WebSocket(WEBSOCKET_URL);

    this.webSocket.onopen = () => {
      this.sendToken();
    };
  }

  isConnected() {
    return this.webSocket.readyState === this.webSocket.OPEN;
  }

  onMessage(
    setMessage: Dispatch<SetStateAction<WebSocketMessage<actionType>>>,
  ) {
    this.webSocket.onmessage = (event) => {
      setMessage(JSON.parse(event.data));
    };
  }

  private sendToken() {
    const token = JSON.stringify({
      action: 'token',
      data: localStorage.getItem('token'),
    });
    this.webSocket.send(token);
  }
}
