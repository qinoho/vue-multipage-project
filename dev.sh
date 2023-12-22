if [ ! $1 ]; then
    echo 'ENTRY not found, you should run: sh dev.sh page-path'
    exit
fi

ENV='development'
echo $ENV

ENTRY=$1 ENV=$ENV pnpm run dev