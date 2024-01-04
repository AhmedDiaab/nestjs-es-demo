# Use the official Elasticsearch image from Docker Hub
FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.0

# Expose the default Elasticsearch port
EXPOSE 9200

# Set environment variables
ENV discovery.type=single-node

# Start Elasticsearch
CMD ["elasticsearch"]
