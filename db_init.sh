#!/usr/bin/env bash

DB_FILE="./db.json"

if [[ ! -f "$DB_FILE" ]]; then
  touch "$DB_FILE"
  echo "{\"users\": []}" >> "$DB_FILE"
  echo "done"
else
  echo "$DB_FILE file present"
fi