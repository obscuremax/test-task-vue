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
