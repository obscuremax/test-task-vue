export default function config(conf) {
  
  const url = "https://api.github.com/graphql";
  const token = "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";
  
  const headers = { 
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json'
  };

  const data = conf

  const config = {
    method: 'post',
    url,
    headers,
    data
  };

  return config
}
