'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

export type TMessage = {
  message: string;
  username?: string;
  last_activity?: string;
  image?: string;
  files?: string[];
}

export default function useWebSocket() {
  const wsRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [status, setStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzYyOTM5Mzk4LCJpYXQiOjE3NjI4NTI5OTgsImp0aSI6IjMyOGNiZWFmNTYwNTRhYjRiOTkwNDZkNWE4Njc1NTU1IiwidXNlcl9pZCI6IjgifQ.-8mXbvjRTCjgmmRx7_LKaVTbUwbP-D7pLX4rz4mT93A';

  useEffect(() => {
    const wsUrl = `ws://10.10.12.15:8000/ws/asc/chat/1/?token=${token}`;
    console.log('Connecting to:', wsUrl);
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      setStatus('open');
      console.log('✅ WebSocket connection opened');
    };

    ws.onmessage = (ev) => {
      try {
        const data = JSON.parse(ev.data);
        setMessages((prev) => [...prev, data]);
      } catch (err) {
        console.error('Invalid message data', ev.data, err);
      }
    };

    ws.onerror = (e) => {
      console.error('❌ WebSocket error', e);
      setStatus('closed');
    };

    ws.onclose = (ev) => {
      console.warn('⚠️ WebSocket closed', ev.code, ev.reason);
      setStatus('closed');
    };

    wsRef.current = ws;
    return () => ws.close();
  }, [token]);

  const sendMessage = useCallback((text: string) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      console.warn('WebSocket not ready');
      return;
    }
    // console.log(JSON.stringify({message: text.trim()}));
    wsRef.current.send(JSON.stringify({message: text.trim()}));
  }, []);

  return { messages, sendMessage, status };
}
