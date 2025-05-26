export const SUPPORTED_DATASTORE_TYPES = ['cassandra'];
export const DISCOVERY_PROVIDER = 'EnvironmentDiscoveryProvider';
export const CASSANDRA_BASE_AUTH_PROVIDER_USERNAME = process.env.SCYLLA_USERNAME;
export const CASSANDRA_BASE_AUTH_PROVIDER_PASSWORD = process.env.SCYLLA_PASSWORD;
export const CASSANDRA_PORT = 9042;
export const CASSANDRA_CLIENT_OPTIONS_PROVIDER = "EC2CassandraClientOptionsProvider"
export const ENVIRONMENTS = [process.env.ENVIRONMENT];
export const REGIONS = [process.env.REGION];
