FROM maven:latest AS build
WORKDIR /api
COPY pom.xml .
COPY src/ ./src
RUN mvn clean install

FROM amazoncorretto:21.0.4-al2023
COPY --from=build /api/target .
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "api.jar"]