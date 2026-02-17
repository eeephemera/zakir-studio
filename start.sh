#!/bin/bash
fuser -k 3000/tcp 2>/dev/null || true
sleep 1
exec npm start
