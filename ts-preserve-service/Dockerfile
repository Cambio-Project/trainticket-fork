# Building the JAR (Build Container)
FROM maven:3.6.1-jdk-8-alpine AS BUILD

COPY ./ ./

RUN mvn clean package

# Running the Service
FROM java:8-jre

RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

COPY --from=BUILD /ts-preserve-service/target/ts-preserve-service-1.0.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/ts-preserve-service-1.0.jar"]

EXPOSE 14568
