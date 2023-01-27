# Regex

| Character | Description |
| --- | --- |
| \r| Matches a carriage return.|　 
| \n| Matches a linefeed.|　 
| ?| 直前の文字の０回か１回の出現にマッチ|　 
|{n}| 直前の文字とn回マッチ|　 
|{n, }| 直前の文字とn回以上マッチ|　 
|{m, n}| 直前の文字がm回からn回までマッチ|　 


テキストファイルの改行コードは使用環境により異なる場合がある。
CR・LF・CR+LFをすべて検索する場合は `\r\n|\n|\r` と記述する。