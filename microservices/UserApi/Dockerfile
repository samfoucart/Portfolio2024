FROM eclipse-temurin:22 as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN ./mvnw install -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


FROM eclipse-temurin:22
RUN apt-get update && apt-get install -y curl

VOLUME /tmp
ARG DEPENDENCY=/workspace/app/target/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
EXPOSE 8080
#ENTRYPOINT echo DATASOURCE $SPRING_DATASOURCE_URL
ENTRYPOINT ["java", "-cp", "app:app/lib/*", "com.samfoucart.UserApi.UserApiApplication"]
#ENTRYPOINT ["ls", "/app/com/samfoucart/PortfolioApi"]
#ENTRYPOINT ["pwd"]
