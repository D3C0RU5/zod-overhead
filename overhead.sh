#!/bin/bash

start_time=$(date +%s.%N)

if [ -z "$1" ]; then
  echo "Uso: $0 <número_de_requisições>"
  exit 1
fi

QUERY=""
if [ "$2" == "validate" ]; then
  QUERY="?validate=true"
fi

URL="http://localhost:3000/api"

COMMANDS=""

for ((i=1; i<=$1; i++)); do
  COMMANDS+="curl -w 'Time: %{time_total} seconds\n' $URL$QUERY"
  if [ $i != $1 ]; then
    COMMANDS+=" & "
  fi
done

eval "$COMMANDS"

wait

end_time=$(date +%s.%N)

execution_time=$(echo "$end_time - $start_time" | bc)

echo "Tempo total de execução do script: $execution_time segundos por $1 solicitações"