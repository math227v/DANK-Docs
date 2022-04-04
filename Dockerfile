FROM pierrezemb/gostatic:latest
COPY ./build /srv/http
EXPOSE 8043
CMD ["/goStatic"]