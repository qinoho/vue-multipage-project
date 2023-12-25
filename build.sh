if [ ! $1 ]; then echo 'ENTRY not found, you should run: sh build.sh page-path'; exit; fi

ENV='production'
echo $ENV

if [ "$2" = "report" ]
then
    ENTRY=$1 ENV=$ENV pnpm run build --report
else
    ENTRY=$1 ENV=$ENV pnpm run build
fi