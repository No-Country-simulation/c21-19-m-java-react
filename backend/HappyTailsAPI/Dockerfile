FROM amazoncorretto:21.0.4-al2023
RUN mkdir /app
WORKDIR /app
COPY target/HappyTailsAPI-0.0.1-SNAPSHOT.jar /app/happytails.jar
EXPOSE 8080
CMD java -jar happytails.jar