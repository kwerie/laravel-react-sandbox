FROM php:8.2-apache

ARG HOST_UID=1000
ARG HOST_GID=1000

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -yq \
        libicu-dev \
        libcap2-bin \
        libzip-dev \
        libpng-dev \
        procps \
        # Clean up
        && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install PCOV extension, we need this to generate phpunit's code coverage report
RUN pecl install pcov && docker-php-ext-enable pcov

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Add apache config
COPY ./000-default.conf /etc/apache2/conf-available/000-default.conf
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf
COPY ./ports.conf /etc/apache2/ports.conf

RUN mkdir /opt/phpstorm-coverage && chown ${HOST_UID}:${HOST_GID} -R /opt/phpstorm-coverage

# Install intl library and extension
RUN docker-php-ext-configure intl
RUN docker-php-ext-install intl pdo_mysql zip gd sockets

# Install XDebug
RUN pecl install xdebug && docker-php-ext-enable xdebug

RUN a2enmod rewrite

USER ${HOST_UID}