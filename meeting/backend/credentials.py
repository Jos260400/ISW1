import os
ENVIRONMENT = 'local'

if ENVIRONMENT == 'local':
    DATABASE_URL = os.environ.get('NEO4J_BOLT_URL', 'bolt://neo4j:tu_contrasena_del_local@localhost:7687')
    IS_DEBUGGING = True
else:
    DATABASE_URL = os.environ.get('NEO4J_BOLT_URL', 'bolt://neo4j:tasmania_finite_chukka_led@localhost:7687')
    IS_DEBUGGING = False


SECRET_KEY_CREDENTIAL = 'rmy+h08k)dl)=#0i4&t(%r^#^&!$dczi#i7mra$+jnuv9f!9i9'
