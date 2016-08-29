rsync -alPvz --password-file=rsync_pass bundle.js nick@107.170.116.232:/var/www/html/
rsync -alPvz --password-file=rsync_pass index.html nick@107.170.116.232:/var/www/html/
rsync -alPvz --password-file=rsync_pass js/ nick@107.170.116.232:/var/www/html/js/
rsync -alPvz --password-file=rsync_pass css/ nick@107.170.116.232:/var/www/html/css/
rsync -alPvz --password-file=rsync_pass images/ nick@107.170.116.232:/var/www/html/images/
rsync -alPvz --password-file=rsync_pass documents/ nick@107.170.116.232:/var/www/html/documents/
