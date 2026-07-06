#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKEND_DIR="${ROOT_DIR}/backend"
FRONTEND_DIR="${ROOT_DIR}/frontend"

BACKEND_PID=""
FRONTEND_PID=""

cleanup() {
  echo
  echo "Stopping HomeHub development servers..."

  if [[ -n "${BACKEND_PID}" ]]; then
    kill "${BACKEND_PID}" 2>/dev/null || true
  fi

  if [[ -n "${FRONTEND_PID}" ]]; then
    kill "${FRONTEND_PID}" 2>/dev/null || true
  fi

  wait 2>/dev/null || true
}

trap cleanup EXIT INT TERM

echo "Starting HomeHub development environment..."

if [[ ! -d "${BACKEND_DIR}/.venv" ]]; then
  echo "Creating backend virtual environment..."
  python3 -m venv "${BACKEND_DIR}/.venv"

  echo "Installing backend dependencies..."
  "${BACKEND_DIR}/.venv/bin/python" -m pip install --upgrade pip
  "${BACKEND_DIR}/.venv/bin/python" -m pip install -r "${BACKEND_DIR}/requirements.txt"
else
  echo "Using existing backend virtual environment."
fi

if [[ ! -d "${FRONTEND_DIR}/node_modules" ]]; then
  echo "Installing frontend dependencies..."
  cd "${FRONTEND_DIR}"
  npm install
fi

echo "Starting backend..."
cd "${BACKEND_DIR}"
"${BACKEND_DIR}/.venv/bin/python" -m uvicorn app.main:app --reload &
BACKEND_PID=$!

echo "Starting frontend..."
cd "${FRONTEND_DIR}"
npm run dev &
FRONTEND_PID=$!

echo
echo "HomeHub development servers are running."
echo
echo "Backend health:"
echo "  http://127.0.0.1:8000/health"
echo
echo "Frontend:"
echo "  http://127.0.0.1:5173"
echo
echo "Press Ctrl+C to stop both servers."
echo

wait -n "${BACKEND_PID}" "${FRONTEND_PID}"