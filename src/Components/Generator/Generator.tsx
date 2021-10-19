import { useState } from 'react';

import { Text } from 'Components/Text/Index';
import { v4 as uuidv4 } from 'uuid';

function Generator () {
  const [value] = useState(uuidv4());

    return (
        <div>
          <Text>{value}</Text>
        </div>
    );
}

export { Generator };