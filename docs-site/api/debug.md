# Debug API

The debug utilities provide enhanced debugging capabilities during development.

## Overview

The debug module offers comprehensive debugging tools including logging, performance monitoring, memory tracking, and development helpers.

## Usage

```javascript
import { debug } from '../utils/debug.js'

// Basic logging
debug.log('Application started')

// Performance timing
debug.time('operation')
// ... perform operation
debug.timeEnd('operation')

// Memory monitoring
debug.memory()
```

## API Reference

### Logging Methods

#### `debug.log(message, data?)`

Enhanced logging with timestamp and context.

```javascript
debug.log('User action', { userId: 123, action: 'click' })
```

#### `debug.warn(message, data?)`

Warning-level logging.

```javascript
debug.warn('Deprecated API used', { api: 'oldMethod' })
```

#### `debug.error(message, error?)`

Error logging with stack trace.

```javascript
debug.error('API call failed', error)
```

### Performance Monitoring

#### `debug.time(label)` / `debug.timeEnd(label)`

Measure execution time.

```javascript
debug.time('api-call')
await fetchData()
debug.timeEnd('api-call') // Outputs: api-call: 245ms
```

#### `debug.memory()`

Display current memory usage.

```javascript
debug.memory()
// Outputs: Memory: 15.2 MB used, 32.1 MB total
```

### Development Helpers

#### `debug.inspect(object)`

Deep inspection of objects.

```javascript
debug.inspect(complexObject)
```

#### `debug.trace()`

Output current stack trace.

```javascript
debug.trace()
```

## Configuration

Debug level can be controlled via environment variables:

```bash
VITE_DEBUG_LEVEL=4  # 0=off, 1=error, 2=warn, 3=info, 4=debug
```
